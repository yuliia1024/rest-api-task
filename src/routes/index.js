import {Router} from "express";
const router = Router();
import {    getAll,
            getById,
            addNew,
            update,
            del
}  from '../controllers/Controllers';

router.get("/", getAll);

router.get("/:id", getById);

router.post("/",  addNew);

router.put('/:id', update);

router.delete('/:id', del);

module.exports = router;

export default router;
