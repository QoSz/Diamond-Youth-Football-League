export function validateEnv() {
    const requiredEnvVars = [
        'MONGODB_URI',
        'NEXT_PUBLIC_API_URL',
        'ADMIN_PASSWORD'
    ];

    const missingEnvVars = requiredEnvVars.filter(
        (envVar) => !process.env[envVar]
    );

    if (missingEnvVars.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingEnvVars.join(', ')}`
        );
    }
} 