import { generateSDKFromOpenAPI } from 'openapi-ts-sdk-builder';
import { readFileSync, writeFileSync } from 'fs';

const openAPIContents = readFileSync('wyscout-openapi.json', 'utf-8');
const sdkContents = await generateSDKFromOpenAPI(
    openAPIContents,
    {
        sdkVersion: 'v1.1.1',
        ignoredParametersNames: ['cookie', 'X-API-Version', 'X-SDK-Version'],
        undocumentedParametersNames: ['X-Application-Version'],
    },
    {
        generateUnusedSchemas: true,
        brandedTypes: [
            'SensorUUID',
            'UUID',
            'Locale',
            'TimeZone',
            'ValueName',
            'SensorVariable',
        ],
        generateRealEnums: true,
        exportNamespaces: true,
    },
);

writeFileSync('src/sdk.ts', sdkContents, 'utf-8');

