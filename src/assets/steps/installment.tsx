export const InstallmentIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  const { width = '45', height = '44', ...rest } = props;

  return (
    <svg
      width="60"
      height="68"
      viewBox="0 0 60 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.107666 0V68H31.0121V50.9999H54.8933C57.2186 50.9999 59.1077 49.0948 59.1077 46.7498V0H0.107666ZM14.1549 65.1652H2.91743V2.83371H14.1549V65.1652ZM50.9198 48.1651H26.7978C26.023 48.1651 25.3933 47.5301 25.3933 46.7498V36.8348H50.6791V46.7498C50.6791 47.2458 50.7634 47.7231 50.9198 48.1651ZM42.2505 2.83371V34H31.0121V2.83371H42.2505ZM28.2032 65.1652H16.9648V2.83371H28.2032V34H22.5836V46.7498C22.5836 49.0948 24.4746 50.9999 26.7979 50.9999H28.2034V65.1652H28.2032ZM56.2967 46.7498C56.2967 47.5301 55.6671 48.1651 54.8933 48.1651C54.1196 48.1651 53.49 47.5301 53.49 46.7498V34H45.0615V2.83371H56.2968V46.7498H56.2967Z"
        fill="black"
      />
    </svg>
  );
};
