import React, { useEffect, useState } from 'react'
import PageHeading from "../components/common/PageHeading"
import { FaShieldAlt, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import certificateData from '../data/Certificates'

const CertificateCard = ({ certificate, onView }) => {
    const { title, issuer, date, image, credentialUrl } = certificate

    return (
        <div className='group dark:text-white text-[#444] bg-[#eee] dark:bg-[#444] relative bg-[#eee] border border-gray-800 rounded-lg overflow-hidden transition-all duration-500 hover:border-primary-yellow'>
            <div className='absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#111111cc] border border-primary-yellow text-primary-yellow text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <FaShieldAlt className='text-[10px]' />
                verified
            </div>

            <button
                onClick={() => onView(certificate)}
                className='w-full aspect-[4/3] bg-[#1a1a1a] overflow-hidden cursor-pointer'
            >
                <img
                    src={image}
                    alt={`${title} certificate`}
                    loading='lazy'
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    onError={(e) => { e.target.style.display = 'none' }}
                />
            </button>

            <div className='p-5 space-y-2'>
                <h3 className='dark:text-white text-[#444] text-[17px] font-bold leading-snug'>{title}</h3>
                <p className='text-primary-yellow text-[13px] font-medium uppercase tracking-wide'>{issuer}</p>

                <div className='flex items-center justify-between pt-2'>
                    <span className='flex items-center gap-2 text-gray-500 text-[13px]'>
                        <FaCalendarAlt className='text-[12px]' />
                        {date}
                    </span>

                    {credentialUrl && (
                        <a
                            href={credentialUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-1.5 text-white text-[13px] font-medium hover:text-primary-yellow transition-colors duration-300'
                        >
                            verify
                            <FaExternalLinkAlt className='text-[11px]' />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

const CertificateModal = ({ certificate, onClose }) => {
    // Close on Escape, and lock page scroll while the modal is open
    useEffect(() => {
        if (!certificate) return

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [certificate, onClose])

    if (!certificate) return null

    return (
        <div
            onClick={onClose}
            className='fixed inset-0 h-screen w-screen dark:text-white text-[#444] bg-[#eee] dark:bg-[#444] z-[999] flex items-center justify-center p-5'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative bg-[#eee] dark:bg-[#444] border border-gray-800 rounded-lg p-4 lg:p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto'
            >
                <button
                    onClick={onClose}
                    aria-label='Close certificate preview'
                    className='absolute -top-3 -right-3 border-2 border-primary-yellow rounded-full text-sm font-bold dark:text-white text-[#444] bg-[#eee] dark:bg-[#444] p-2 hover:bg-primary-yellow transition-all duration-300'
                >
                    <FaX />
                </button>

                <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate, full size`}
                    className='w-full h-auto rounded'
                    onError={(e) => { e.target.style.display = 'none' }}
                />

                <div className='pt-4'>
                    <h3 className='text-white text-xl font-bold'>{certificate.title}</h3>
                    <p className='text-primary-yellow text-sm uppercase tracking-wide'>{certificate.issuer} &middot; {certificate.date}</p>
                </div>
            </div>
        </div>
    )
}

const Certificates = () => {
    const [activeCertificate, setActiveCertificate] = useState(null)

    // Show the newest certificates first
    const sortedCertificates = [...certificateData].sort((a, b) => b.date - a.date)

    return (
        <section
            className='max-w-[1200px] mx-auto px-4 md:px-0 md:w-11/12 pb-20 lg:pb-0'
            data-aos='fade-down'
            data-aos-duration='1200'
        >
            <PageHeading mainText={"My"} highLightedText={"Certificates"} secondText={"certificates"} />

            {sortedCertificates.length === 0 ? (
                <p className='text-gray-500 text-center'>Certificates coming soon.</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {sortedCertificates.map((certificate) => (
                        <CertificateCard
                            key={certificate.id}
                            certificate={certificate}
                            onView={setActiveCertificate}
                        />
                    ))}
                </div>
            )}

            <CertificateModal
                certificate={activeCertificate}
                onClose={() => setActiveCertificate(null)}
            />
        </section>
    )
}

export default Certificates
