import React from 'react';

const roles = [
  { name: 'Software Engineer', selected: true },
  { name: 'DevOps Engineer', selected: false },
  { name: 'Data Engineer', selected: false },
];

function RoleSelector() {
  return (
    <div className="flex flex-col w-full max-w-[284px]">
      <div className="flex gap-3 items-center w-full font-semibold whitespace-nowrap border-b border-solid border-b-neutral-300 min-h-[28px]">
        <div className="gap-2.5 self-stretch my-auto w-[88px]">Role</div>
      </div>
      <div className="flex gap-1 items-center mt-1 w-full font-medium">
        {roles.map((role, index) => (
          <div key={index} className="flex gap-2.5 items-center self-stretch my-auto">
            {role.selected ? (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b8bd55580f074e060f3ba17d0fd2e4fd21592f23933dd0f7a122f659227902?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square fill-indigo-500"
              />
            ) : (
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-white rounded shadow-sm" />
            )}
            <div className="self-stretch my-auto">{role.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoleSelector;