// src/app/cloudinary.config.ts
import { Cloudinary } from '@cloudinary/base';

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: 'dvgnpeias',
        apiKey: '355913129594637',
        apiSecret: 'hW1q1xISFtAX05lZA7HAsjgI2vY',
    }
});

export { cloudinary };
