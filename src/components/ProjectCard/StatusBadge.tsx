interface StatusBadgeProps {
  statusText: string;
  backgroundColorStyles: string;
  iconColorStyles: string;
  textColorStyles: string;
}

const StatusBadge = ({
  statusText,
  backgroundColorStyles,
  iconColorStyles,
  textColorStyles,
}: StatusBadgeProps) => {
  return (
    <div
      className={`flex items-center transition-[background-color] duration-500 ${backgroundColorStyles} rounded-lg px-1.5 py-0.5`}
    >
      <svg
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        className={`h-1.5 w-1.5 transition-[fill] duration-500 ${iconColorStyles} mr-1.5`}
      >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z"></path>
            </g>
          </g>
        </g>
      </svg>
      <span
        className={`text-xs transition-[color] duration-500 ${textColorStyles} font-medium`}
      >
        {statusText}
      </span>
    </div>
  );
};

export const CompletedBadge = () => {
  return (
    <StatusBadge
      statusText="Completed"
      backgroundColorStyles="bg-green-300 dark:bg-green-600"
      iconColorStyles="fill-green-700 dark:fill-white"
      textColorStyles="text-green-700 dark:text-white"
    />
  );
};

export const InProgressBadge = () => {
  return (
    <StatusBadge
      statusText="In progress"
      backgroundColorStyles="bg-amber-300 dark:bg-amber-600"
      iconColorStyles="fill-amber-700 dark:fill-white"
      textColorStyles="text-amber-700 dark:text-white"
    />
  );
};

// TODO: Add more status badges
