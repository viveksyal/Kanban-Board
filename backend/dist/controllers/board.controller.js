import { createBoard } from "../services/board.service.js";
export async function boardController(req, res) {
    const { title } = req.body;
    const userId = req.user.userId;
    const boardData = await createBoard({ userId, title });
    res.status(201).json({
        message: "board created successfully",
        id: boardData.id,
        title: boardData.title,
        ownerId: boardData.ownerId
    });
}
//# sourceMappingURL=board.controller.js.map