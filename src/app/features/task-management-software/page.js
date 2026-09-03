// 'use client';

import TaskManagementPage from "@/page-components/task-management";

// import AppWrapper from '../../../components/AppWrapper';


export const metadata = {
  title: 'Task Management App with To Do List Tools | MeMate',
  description: 'MeMate task management software and to do list app give you powerful task management tools. Get started with our task management app and stay on top',
   alternates: {
    canonical: 'https://memate.com.au/features/task-management-software',
  },
}

export default function TaskManagement() {
  return (
    // <AppWrapper>
      <TaskManagementPage />  
    // </AppWrapper>
  );
}