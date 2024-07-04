import { Request, Response } from 'express';
import memoryCache from 'memory-cache';



const getPhotoUrls = async (req: Request, res: Response): Promise<void> => {
    const count: number = parseInt(req.params.count, 10);
    const cacheKey = `photos_${count}`;
    const photoUrlsFromCache = memoryCache.get(cacheKey);
    if (photoUrlsFromCache) {
        res.json(photoUrlsFromCache);
        return;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
        const responseAsJSON = await response.json();
        const photoUrls: string[] = responseAsJSON.map((photo: any) => photo.urls.full);
        memoryCache.put(cacheKey, photoUrls);
        res.json(photoUrls);
    } catch (error) {
        res.status(500).send('Error fetching photos');
    }
};

export { getPhotoUrls };
