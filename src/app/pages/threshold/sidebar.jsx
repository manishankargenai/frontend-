"use client";
import { useState } from "react";
import RoleSelector from "./RoleSelector";
import CloudSkillsSection from "./cloudskill";

export default function Sidebar({ roles, skills_data, sendRangeValue, sendSelectedRoles }) {
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [sliderValue, setSliderValue] = useState(1);
    const [dashboards, setDashboards] = useState([]);
    const [cloudSkills, setCloudSkills] = useState([]);
    const [message, setMessage] = useState("");
    const [rangeValue, setRangeValue] = useState(1);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };

    const handleClick = () => {
        sendRangeValue(rangeValue);
    };

    const handleRoleChange = (role) => {
        const updatedRoles = selectedRoles.includes(role)
            ? selectedRoles.filter((r) => r !== role)
            : [...selectedRoles, role];
        
        setSelectedRoles(updatedRoles);
        sendSelectedRoles(updatedRoles);
    };

    const createDashboards = async () => {
        if (selectedRoles.length === 0) {
            setMessage("Please select at least one role");
            return;
        }

        const payload = {
            roles: selectedRoles,
            numberOfDashboards: sliderValue,
            skills_data: skills_data
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/create-dashboards/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            if (response.ok) {
                setDashboards(data.dashboards || []);
                setCloudSkills(data.dashboards || []);
                setMessage("Dashboards created successfully!");
            } else {
                setMessage(data.detail || "Failed to create dashboards");
            }
        } catch (error) {
            console.log("Error creating dashboards:", error);
            setMessage("Error creating dashboards");
        }
    };

    return (
        <div style={styles.outerContainer}>
            <div style={styles.roleSelectorContainer}>
                <RoleSelector
                    roles={roles}
                    onRoleChange={handleRoleChange}
                    selectedRoles={selectedRoles}
                />
            </div>

            <div style={styles.sliderContainer}>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    style={styles.slider}
                />
                <p>Number of Dashboards: {rangeValue}</p>
            </div>

            <button
                onClick={handleClick}
                style={styles.createButton}
                disabled={selectedRoles.length === 0}
            >
                Create Dashboard
            </button>

            {message && (
                <div style={styles.messageContainer}>
                    {message}
                </div>
            )}

            <div style={styles.dashboardsContainer}>
                {dashboards.map((dashboard, index) => (
                    <div key={index} style={styles.dashboard}>
                        <h4>{dashboard.title}</h4>
                        <p>{dashboard.description}</p>
                    </div>
                ))}
            </div>

{cloudSkills.length > 0 && (
    <CloudSkillsSection
        skills_data={skills_data}  // Changed from cloudSkills to skills_data
        selectedRoles={selectedRoles}
        receivedValue={rangeValue}
        dashboardData={dashboards}
        onThresholdUpdate={(selection, rejection) => {
            // Handle threshold updates if needed
        }}
    />
)}
        </div>
    );
}

const styles = {
    outerContainer: {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
        margin: "0 auto"
    },
    roleSelectorContainer: {
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa"
    },
    sliderContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa"
    },
    slider: {
        width: "100%",
        marginBottom: "10px"
    },
    createButton: {
        padding: "12px 24px",
        backgroundColor: "#6200ea",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        transition: "background-color 0.3s ease",
        "&:hover": {
            backgroundColor: "#5000d3"
        },
        "&:disabled": {
            backgroundColor: "#cccccc",
            cursor: "not-allowed"
        }
    },
    messageContainer: {
        padding: "10px",
        borderRadius: "4px",
        backgroundColor: "#f0f0f0",
        textAlign: "center"
    },
    dashboardsContainer: {
        marginTop: "20px"
    },
    dashboard: {
        padding: "15px",
        backgroundColor: "#ffffff",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
    }
};
