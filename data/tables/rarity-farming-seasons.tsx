

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "rarityFarmingSeasons",
            tableCaption: "",
            tableData: {
                headers: [`Category`, `Season 1`, `Season 2`],
                data: [
                    [`Rarity`, `980,000 GHST`, `1,200,000 GHST`],
					[`Kinship`, `280,000 GHST`, `200,000 GHST`],
					[`XP`, `140,000 GHST`, `200,000 GHST`],
					[`Rookie Kinship`, `-`, `200,000 GHST`],
					[`Rookie XP`, `-`, `200,000 GHST`]
                ]
            }
        }
    ]