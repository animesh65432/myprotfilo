import React, { useEffect, useState } from 'react';
import { ProjecTypes } from '@/types/index';
import axios from 'axios';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Project: React.FC = () => {
    const [projects, setProjects] = useState<ProjecTypes[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/projects');
            setProjects(response?.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='h-[80vh] overflow-auto mb-6 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
                <Card key={project.live} className='p-4 rounded-2xl shadow-lg bg-white flex flex-col gap-4 hover:shadow-xl transition-shadow'>
                    <Image
                        src={project.image}
                        width={300}
                        height={200}
                        alt={project.name}
                        className='rounded-lg object-cover'
                    />
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-semibold text-gray-800'>{project.name.toUpperCase()}</h2>
                        <p className='text-gray-600 text-sm'>{project.about}</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <a href={project.code} target='_blank' rel='noopener noreferrer'>
                            <Button variant='outline'>View Code</Button>
                        </a>
                        <a href={project.live} target='_blank' rel='noopener noreferrer'>
                            <Button variant='default'>Live Demo</Button>
                        </a>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Project;