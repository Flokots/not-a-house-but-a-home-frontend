import React from 'react';
import { useTranslation } from 'react-i18next';

interface GDPRStatementProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LegalBasisItem {
  title: string;
  description: string;
}

interface GdprRightItem {
  title: string;
  description: string;
}

const GDPRStatement: React.FC<GDPRStatementProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('gdpr');

  if (!isOpen) return null;

  // Type-safe helpers for getting arrays from translations
  const getStringArray = (key: string): string[] => {
    const result = t(key, { returnObjects: true });
    if (Array.isArray(result)) {
      return result.filter((item): item is string => typeof item === 'string');
    }
    return [];
  };

  const isLegalBasisItem = (item: unknown): item is LegalBasisItem => {
    return (
      typeof item === 'object' &&
      item !== null &&
      'title' in item &&
      'description' in item &&
      typeof (item as Record<string, unknown>).title === 'string' &&
      typeof (item as Record<string, unknown>).description === 'string'
    );
  };

  const isGdprRightItem = (item: unknown): item is GdprRightItem => {
    return (
      typeof item === 'object' &&
      item !== null &&
      'title' in item &&
      'description' in item &&
      typeof (item as Record<string, unknown>).title === 'string' &&
      typeof (item as Record<string, unknown>).description === 'string'
    );
  };

  const getLegalBasisItems = (): LegalBasisItem[] => {
    const result = t('sections.legalBasis.items', { returnObjects: true });
    if (Array.isArray(result)) {
      return result.filter(isLegalBasisItem);
    }
    return [];
  };

  const getGdprRightItems = (): GdprRightItem[] => {
    const result = t('sections.gdprRights.items', { returnObjects: true });
    if (Array.isArray(result)) {
      return result.filter(isGdprRightItem);
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
            <h3 className="text-xl font-semibold mb-3">{t('sections.rights.title')}</h3>
            <p>{t('sections.rights.content')}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.dataCollection.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.dataCollection.namedContributions.title')}</h4>
              <ul className="list-disc ml-6 space-y-1">
                {getStringArray('sections.dataCollection.namedContributions.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="text-lg font-medium">{t('sections.dataCollection.anonymousContributions.title')}</h4>
              <ul className="list-disc ml-6 space-y-1">
                {getStringArray('sections.dataCollection.anonymousContributions.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.legalBasis.title')}</h3>
            <p>{t('sections.legalBasis.intro')}</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              {getLegalBasisItems().map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.dataUse.title')}</h3>
            <ul className="list-disc ml-6 space-y-1">
              {getStringArray('sections.dataUse.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.dataSharing.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.dataSharing.designContent.title')}</h4>
              <p>{t('sections.dataSharing.designContent.intro')}</p>
              <ul className="list-disc ml-6 space-y-1">
                {getStringArray('sections.dataSharing.designContent.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="text-lg font-medium">{t('sections.dataSharing.personalInfo.title')}</h4>
              <p>{t('sections.dataSharing.personalInfo.content')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.gdprRights.title')}</h3>
            <p>{t('sections.gdprRights.intro')}</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              {getGdprRightItems().map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong> {item.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.dataRetention.title')}</h3>
            <div className="space-y-3">
              <h4 className="text-lg font-medium">{t('sections.dataRetention.personalInfo.title')}</h4>
              <ul className="list-disc ml-6 space-y-1">
                {getStringArray('sections.dataRetention.personalInfo.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="text-lg font-medium">{t('sections.dataRetention.designContent.title')}</h4>
              <p>{t('sections.dataRetention.designContent.content')}</p>

              <h4 className="text-lg font-medium">{t('sections.dataRetention.anonymous.title')}</h4>
              <p>{t('sections.dataRetention.anonymous.content')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.dataSecurity.title')}</h3>
            <p>{t('sections.dataSecurity.intro')}</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              {getStringArray('sections.dataSecurity.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.internationalTransfers.title')}</h3>
            <p>{t('sections.internationalTransfers.intro')}</p>
            <ul className="list-disc ml-6 space-y-1 mt-2">
              {getStringArray('sections.internationalTransfers.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.contact.title')}</h3>
            <p>{t('sections.contact.intro')}</p>
            <div className="mt-2 p-3 bg-gray-100 rounded">
              <p><strong>{t('sections.contact.details.title')}</strong></p>
              <p>{t('sections.contact.details.organization')}</p>
              <p>{t('sections.contact.details.email')}</p>
              <p>{t('sections.contact.details.address')}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">{t('sections.supervisory.title')}</h3>
            <p>{t('sections.supervisory.content')}</p>
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

export default GDPRStatement;