
import stepData from "../../../data/stepsData.json"
import { ShippingIcon } from '../../../assets/steps/shipping';
import { ViewIcon } from '../../../assets/steps/view';
import { InstallmentIcon } from '../../../assets/steps/installment';
import { OptionsIcon } from '../../../assets/steps/options';

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
      <section className="py-10 bg-white px-3">
        {/* Steps Container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
          {stepData.steps.map((step) => {
            // Type cast or check if the icon name exists in the iconMap
            const iconName = step.iconName as IconName;
  
            // Optionally check if the icon exists, fallback to a default icon or handle missing cases
            const IconComponent = iconMap[iconName] || <div>Icon not found</div>;
  
            return (
              <div key={step.id} className="flex flex-col gap-4">
                {/* Icon */}
                <div className="w-12 h-12">{IconComponent}</div>
  
                {/* Step Title */}
                <h3 className="mt-4 text-lg font-semibold text-[#49AD91]">
                  {step.step}
                </h3>
  
                {/* Main Title */}
                <div>
                  <h4 className="mt-2 text-base font-bold text-gray-900">
                    {step.title}
                  </h4>
  
                  {/* Description */}
                  <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default StepSection;