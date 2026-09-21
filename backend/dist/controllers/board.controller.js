import { createBoard, getBoards } from "../services/board.service.js";
export async function createBoardController(req, res) {
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
export async function getBoardsController(req, res) {
    const userId = req.user.userId;
    const boards = await getBoards(userId);
    res.status(200).json({
        message: "Boards fetched successfully",
        boards
    });
}
//# sourceMappingURL=board.controller.js.map