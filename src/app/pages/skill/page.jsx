"use client";
import React from 'react';
import './skill.module.css';
import Header from '../resume/headerr';
 import Skill from './skill';
// import QAInterface from './QAInterface';
// import QAInterface from './new';

export default function SkillPage() {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-50">
      <Header />
      <div className="flex-1">
        <Skill />
        {/* <QAInterface /> */}
        
      </div>
    </div>
  );
}
