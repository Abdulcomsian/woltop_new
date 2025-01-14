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
        'flex w-full flex-col  pb-[20px]  lg:pb-[40px] lg:px-7 xl:px-10 xl:pb-[54px] 3xl:pb-[60px]',
        className,
      )}
    >
      {title && (
        <div
          className={`mb-7 flex justify-start flex-col gap-2 ${position === 'center' ? 'items-center' : 'items-start'
            }`}
        >
          {title && (
            <h3 className="text-xl font-semibold lg:text-[27px] 3xl:text-3xl font-poppins">
              {title}
            </h3>
          )}
          {subtitle && (
            <h3 className="text-xs md:text-base lg:text-xl text-[#7A7474] font-medium font-poppins">
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
