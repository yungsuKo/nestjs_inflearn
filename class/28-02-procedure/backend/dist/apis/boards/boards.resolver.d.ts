import { CreateBoardInput } from './dto/createBoard.input';
import { BoardService } from './boards.service';
export declare class BoardResolver {
    private readonly boardService;
    constructor(boardService: BoardService);
    fetchBoards(): {
        number: number;
        writer: string;
    }[];
    createBoard(createBoardInput: CreateBoardInput): string;
}
