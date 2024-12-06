import React from 'react';

export default function RoleSelector({ roles, onRoleChange }) {
  return (
    <div>
      <h3>Select Roles</h3>
      {roles.map((role) => (
        <div key={role}>
          <label>
            <input
              type="checkbox"
              value={role}
              onChange={() => onRoleChange(role)}
            />
            {role}
          </label>
        </div>
      ))}
    </div>
  );
}
