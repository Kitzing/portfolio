import './styles/Home.css';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Skills({skills}) {
    return (
        <div className='top-distance'>
            <Stack direction="horizontal" gap={2}> 
            {skills.map((skill, index) => (
                <Badge pill bg="dark" key={index}> 
                    {skill}
                </Badge>
             ))}
            </Stack>
        </div>
    );}

export default Skills;