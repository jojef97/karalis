export default function Home() {
    return (
        <main style={styles.main}>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={styles.videoBackground}
            >
                <source src="/city.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </main>
    );
}

const styles = {
    main: {
        position: 'relative' as const,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'transparent', // Change this from '#000' to 'transparent'
    },
    videoBackground: {
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '100%',
        minHeight: '100%',
        objectFit: 'cover' as const,
        zIndex: 1,
    },

};
    
