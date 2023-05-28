import { NextApiRequest, NextApiResponse } from 'next'
import { people } from '../../../data'
import type { Person, ResponseError } from '../../../interfaces'

export default function indicationHandler(
    req: NextApiRequest,
    res: NextApiResponse<Person | ResponseError>
) {
    const { query } = req
    const { id } = query
    const indication = people.find((p) => p.id === id)

    // User with id exists
    return indication
        ? res.status(200).json(indication)
        : res.status(404).json({ message: `User with id: ${id} not found.` })
}