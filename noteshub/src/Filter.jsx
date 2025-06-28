import React, { useState, useEffect } from 'react';

function Filter({ notes, onFilter, onClearFilters }) {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');

    const uniqueCourses = Array.from(new Set(notes.map(note => note.course)));
    const uniqueSemesters = Array.from(new Set(notes.map(note => note.semester))).sort();

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    };

    const handleFilterClick = () => {
        onFilter(selectedCourse, selectedSemester);
    };

    const handleClearClick = () => {
        setSelectedCourse('');
        setSelectedSemester('');
        
        onClearFilters();
    };

    return (
        <div className="bg-gray-100 flex flex-row justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center  rounded-lg py-3   m-4 w-3xl gap-5">
                <h2 className="text-2xl text-center  font-semibold w-2xl">Find Academic Notes</h2>
                <div className="flex flex-row gap-10">
                    <select className="p-3 border border-gray-300 rounded" value={selectedCourse} onChange={handleCourseChange}>
 <option value="">Select Course</option>
                        {uniqueCourses.map(course => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </select>

                    <select className="p-3 border border-gray-300 rounded" value={selectedSemester} onChange={handleSemesterChange}>
                        <option value="">Select Semester</option>
 {uniqueSemesters.map(semester => (
                            <option key={semester} value={semester}>{`Semester ${semester}`}</option>
                        ))}
                    </select>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFilterClick}>Filter</button>

                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleClearClick}>
                        Clear Filters
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Filter;