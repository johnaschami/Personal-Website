import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  // Ensure bullets is an array (convert string to array if needed & handle empty values)
  const [bulletsLocal, setBulletsLocal] = React.useState(
    Array.isArray(bullets) ? bullets : bullets ? bullets.split(",") : []
  );

  return (
    <div className="mt-5 w-full flex flex-col desktop:flex-row justify-between">
      <div>
        <h3 className="text-xl font-bold">{position}</h3>
        <p className="text-gray-500">{dates} | {type}</p>

        {/* Only render bullets if they exist */}
        {bulletsLocal.length > 0 && bulletsLocal.some(bullet => bullet.trim() !== "") && (
          <ul className="list-disc ml-5">
            {bulletsLocal.map((bullet, index) =>
              bullet.trim() !== "" ? <li key={index}>{bullet.trim()}</li> : null
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
