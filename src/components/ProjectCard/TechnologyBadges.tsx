interface TechnologyBadgeProps {
  technologyName: string;
  backgroundColorStyles: string;
  borderColorStyles: string;
  textColorStyles: string;
}

const TechnologyBadge = ({
  technologyName,
  backgroundColorStyles,
  borderColorStyles,
  textColorStyles,
}: TechnologyBadgeProps) => {
  return (
    <div
      className={`transition-[background-color,border-color] duration-500 ${backgroundColorStyles} border ${borderColorStyles} rounded-lg p-1`}
    >
      <span className={`transition-[color] duration-500 ${textColorStyles}`}>
        {technologyName}
      </span>
    </div>
  );
};

export const AngularBadge = () => {
  return (
    <TechnologyBadge
      technologyName="Angular"
      backgroundColorStyles="bg-red-100 bg-opacity-30 dark:bg-red-600 dark:bg-opacity-100"
      borderColorStyles="border-red-500  dark:border-red-600"
      textColorStyles="text-red-500 dark:text-white"
    />
  );
};

export const NextJsBadge = () => {
  return (
    <TechnologyBadge
      technologyName="Next.js"
      backgroundColorStyles="bg-zinc-100 bg-opacity-30 dark:bg-zinc-600 dark:bg-opacity-100"
      borderColorStyles="border-zinc-600  dark:border-zinc-600"
      textColorStyles="text-zinc-600 dark:text-white"
    />
  );
};

export const TailwindBadge = () => {
  return (
    <TechnologyBadge
      technologyName="TailwindCSS"
      backgroundColorStyles="bg-sky-100 bg-opacity-30 dark:bg-sky-500 dark:bg-opacity-100"
      borderColorStyles="border-sky-500  dark:border-sky-500"
      textColorStyles="text-sky-500 dark:text-white"
    />
  );
};

export const AspDotNetCoreWebApiBadge = () => {
  return (
    <TechnologyBadge
      technologyName="ASP.NET Core Web API"
      backgroundColorStyles="bg-purple-100 bg-opacity-30 dark:bg-purple-700 dark:bg-opacity-100"
      borderColorStyles="border-purple-600  dark:border-purple-700"
      textColorStyles="text-purple-600 dark:text-white"
    />
  );
};

export const EfCoreBadge = () => {
  return (
    <TechnologyBadge
      technologyName="EF Core"
      backgroundColorStyles="bg-purple-100 bg-opacity-30 dark:bg-purple-700 dark:bg-opacity-100"
      borderColorStyles="border-purple-600  dark:border-purple-700"
      textColorStyles="text-purple-600 dark:text-white"
    />
  );
};

export const SignalRBadge = () => {
  return (
    <TechnologyBadge
      technologyName="SignalR"
      backgroundColorStyles="bg-purple-100 bg-opacity-30 dark:bg-purple-700 dark:bg-opacity-100"
      borderColorStyles="border-purple-600  dark:border-purple-700"
      textColorStyles="text-purple-600 dark:text-white"
    />
  );
};
