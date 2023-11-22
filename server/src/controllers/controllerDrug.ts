import {Request, Response, request} from 'express';

export const getDrugs = (req: Request, res: Response) => {

    res.json({
        text: 'get list of Drugs'
    })
}

export const getDrug = (req: Request, res: Response) => {
    
    const { id } = req.params;

    res.json({
        text: 'get Drug',
        id
    })
}

export const deleteDrug = (req: Request, res: Response) => {
    
    const { id } = req.params;

    res.json({
        text: 'delete Drug',
        id
    })
}

export const postDrug = (req: Request, res: Response) => {
    
    const { body } = req;

    res.json({
        text: 'save Drug',
        body
    })
}

export const putDrug = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    console.log(body)
    res.json({
        text: 'update Drug',
        id,
        body
    })
}

