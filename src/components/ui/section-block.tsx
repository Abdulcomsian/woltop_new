import cn from 'classnames';
import { useTranslation } from 'next-i18next';


type SectionProps = {
  className?: any;
  title?: string;
  subtitle?: string;
  href?: string;
  children?: React.ReactNode;
  position?: string;
};

/**
 * UI component for a section block
 * @param {string} title - The title of the section
 * @param {string} description - The description of the section
 * @param {string} href - The href of the external page for this section
 */

const SectionBlock: React.FC<SectionProps> = ({
  className,
  title,
  href,
  children,
  subtitle,
  position,
}) => {
  // const { t } = useTranslation('common');
  return (
    <div
      className={cn(
        'flex w-full flex-col pb-[40px] xl:pb-[70px]',
        className,
      )}
    >
      {title && (
        <div
          className={`mb-[20px] md:mb-[30px] flex justify-start flex-col gap-1 ${position === 'center' ? 'items-center' : 'items-start'
            }`}
        >
          {title && (
            <h3 className="text-[22px] font-semibold lg:text-[34px] text-[#000000]">
              {title}
            </h3>
          )}
          {subtitle && (
            <h3 className="text-sm md:text-[22px] text-[#7A7474] font-normal">
              {subtitle}
            </h3>
          )}
          {/* {href && (
            <Link
              href={href}
              className="justify-end text-base font-semibold transition-colors hover:text-orange-500"
            >
              {t('text-see-all')}
            </Link>
          )} */}
        </div>
      )}

      {children}
    </div>
  );
};

export default SectionBlock;
