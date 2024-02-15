import './styles/Home.css';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function Skills() {
    return (
        <div className='top-distance'>
            <Stack direction="horizontal" gap={2}> 
               <Badge pill bg="dark">
                    Vue
                </Badge>
                <Badge pill bg="dark">
                    TypeScript
                </Badge>
                <Badge pill bg="dark">
                    GraphQL
                </Badge>
                <Badge pill bg="dark">
                    Figma
                </Badge>
                <Badge pill bg="dark">
                    React
                </Badge>
            </Stack>
        </div>
    );}

export default Skills;