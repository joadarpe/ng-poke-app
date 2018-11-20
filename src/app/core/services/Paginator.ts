export class Paginator {

    pages: number[] = []
    actualPage: number = 1
    pageSize: number = 12

    constructor(pageSize: number = 12) {
        this.pageSize = pageSize
    }

    loadActualPage(results: any[]): any[] {
        let resultSize = results.length
        this.loadPages(resultSize)
        let startIndex = (this.actualPage - 1) * this.pageSize
        let endIndex = Math.min(this.actualPage * this.pageSize, resultSize)
        return results.slice(startIndex, endIndex)
    }

    loadPages(itemCount: number) {
        this.pages = []
        let totalPages = Math.ceil(itemCount / this.pageSize)
        for (let index = 1; index <= totalPages; index++)
            this.pages.push(index)
    }

}