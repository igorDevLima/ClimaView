'use client';
import { Button, ButtonGroup } from 'react-bootstrap';

const ChangeUnit: React.FC = () => {
  return (
    <>
      <div className="m-3 flex flex-wrap gap-x-4 gap-y-2">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">mm</Button>
          <Button variant="secondary">inch</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">°C</Button>
          <Button variant="secondary">°F</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ChangeUnit;
