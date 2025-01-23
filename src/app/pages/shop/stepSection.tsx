import stepData from "../../../data/stepsData.json";
import { ShippingIcon } from "../../../assets/steps/shipping";

// Define IconName type
type IconName = 'ViewIcon' | 'OptionsIcon' | 'ShippingIcon' | 'InstallationIcon';
import { ViewIcon } from "../../../assets/steps/view";
import { InstallmentIcon } from "../../../assets/steps/installment";
import { OptionsIcon } from "../../../assets/steps/options";

interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
  iconName: IconName; // Ensure this is one of the valid keys
}

// Map icon names to actual components
const iconMap: Record<IconName, JSX.Element> = {
  ViewIcon: <ViewIcon />,
  OptionsIcon: <OptionsIcon />,
  ShippingIcon: <ShippingIcon />,
  InstallationIcon: <InstallmentIcon />,
};

const StepSection = () => {
  return (
    <section className="bg-white px-3 py-10">
      {/* Steps Container */}
      <div className="container mx-auto grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stepData.steps.map((step) => {
          // Type cast or check if the icon name exists in the iconMap
          const iconName = step.iconName as IconName;

          // Optionally check if the icon exists, fallback to a default icon or handle missing cases
          const IconComponent = iconMap[iconName] || <div>Icon not found</div>;

          return (
            <div key={step.id} className="flex flex-col gap-4">
              {/* Icon */}
              <div className="h-12 w-12 mb-8">{IconComponent}</div>

              {/* Step Title */}
              <h3 className="mb-4 text-lg lg:text-2xl font-semibold text-[#49AD91]">
                {step.step}
              </h3>

              {/* Main Title */}
              <div>
                <h4 className="mb-3 text-base lg:text-[18px] font-semibold text-[#121212]">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-sm lg:text-base text-[#656567]">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StepSection;
