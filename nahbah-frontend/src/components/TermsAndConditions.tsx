import React from 'react';
import { useTranslation } from 'react-i18next';

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('terms');

  if (!isOpen) return null;

  // Type-safe helper for getting arrays from translations
  const getStringArray = (key: string): string[] => {
    const result = t(key, { returnObjects: true });
    if (Array.isArray(result)) {
      return result.filter((item): item is string => typeof item === 'string');
    }
    return [];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t('title')}</h2>
          <button 
            onClick={onClose}
            className="text-2xl font-bold hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.acceptance.title')}</h3>
            <p>{t('sections.acceptance.content')}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.purpose.title')}</h3>
            <p>{t('sections.purpose.content')}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.contentSubmission.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.contentSubmission.grantOfRights.title')}</h4>
              <p>{t('sections.contentSubmission.grantOfRights.content')}</p>
              
              <h4 className="text-lg font-medium">{t('sections.contentSubmission.distributionRights.title')}</h4>
              <p>{t('sections.contentSubmission.distributionRights.intro')}</p>
              <ul className="list-disc ml-6 space-y-1">
                {getStringArray('sections.contentSubmission.distributionRights.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="text-lg font-medium">{t('sections.contentSubmission.humanitarian.title')}</h4>
              <p>{t('sections.contentSubmission.humanitarian.content')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.attribution.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.attribution.namedContributions.title')}</h4>
              <p>{t('sections.attribution.namedContributions.content')}</p>
              
              <h4 className="text-lg font-medium">{t('sections.attribution.anonymousContributions.title')}</h4>
              <p>{t('sections.attribution.anonymousContributions.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.attribution.anonymousProcess.title')}</h4>
              <p>{t('sections.attribution.anonymousProcess.intro')}</p>
              <ul className="list-disc ml-6 space-y-1">
                {getStringArray('sections.attribution.anonymousProcess.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="text-lg font-medium">{t('sections.attribution.anonymousAttribution.title')}</h4>
              <p>{t('sections.attribution.anonymousAttribution.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.attribution.communityBuilding.title')}</h4>
              <p>{t('sections.attribution.communityBuilding.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.attribution.attributionLimitations.title')}</h4>
              <p>{t('sections.attribution.attributionLimitations.content')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.privacyAnonymous.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.privacyAnonymous.dataMinimization.title')}</h4>
              <p>{t('sections.privacyAnonymous.dataMinimization.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.privacyAnonymous.technicalAnonymity.title')}</h4>
              <p>{t('sections.privacyAnonymous.technicalAnonymity.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.privacyAnonymous.contentReview.title')}</h4>
              <p>{t('sections.privacyAnonymous.contentReview.content')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.contentRequirements.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.contentRequirements.originalWork.title')}</h4>
              <p>{t('sections.contentRequirements.originalWork.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.contentRequirements.safetyAppropriateness.title')}</h4>
              <p>{t('sections.contentRequirements.safetyAppropriateness.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.contentRequirements.anonymousQuality.title')}</h4>
              <p>{t('sections.contentRequirements.anonymousQuality.content')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.review.title')}</h3>
            <p>{t('sections.review.content')}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.disclaimer.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.disclaimer.useAtRisk.title')}</h4>
              <p>{t('sections.disclaimer.useAtRisk.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.disclaimer.noWarranties.title')}</h4>
              <p>{t('sections.disclaimer.noWarranties.content')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.dataProtection.title')}</h3>
            <p>{t('sections.dataProtection.content')}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.modifications.title')}</h3>
            <p>{t('sections.modifications.content')}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.contact.title')}</h3>
            <p>{t('sections.contact.content')}</p>
          </section>

          <div className="mt-8 p-4 bg-gray-100 rounded">
            <p className="text-sm font-medium">
              {t('footer.lastUpdated', { date: new Date().toLocaleDateString() })}
            </p>
            <p className="text-sm mt-2">
              {t('footer.acknowledgment')}
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button 
            onClick={onClose}
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded transition-colors"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;