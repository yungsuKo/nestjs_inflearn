/**
 * @openapi
 * /boards:
 *   get:
 *     summary: 게시물 조회.
 *     tags : [Boards]
 *     parameters:
 *       - in: query
 *         name : number
 *         type: int
 *     description: 게시물 목록을 리턴한다.
 *     responses:
 *       200:
 *         description: 게시물 목록을 리턴됨
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   number:
 *                     type: integer
 *                     example: 1
 *                   description:
 *                     type: string
 *                     example: 게시물 냐ㅐ용1
 *                   title:
 *                     type: string
 *                     example: 게시물 내용1
 */

/**
 * @openapi
 * /boards:
 *   post:
 *     summary: 게시물 등록.
 *     tags : [Boards]
 *     description: 게시물 목록을 리턴한다.
 *     responses:
 *       200:
 *         description: 성공
 */
