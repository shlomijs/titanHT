import { Router } from 'express';
import { getPhotoUrls } from '../controllers/unsplashController';
const router = Router();

router.get('/:count', getPhotoUrls);

export default router;
