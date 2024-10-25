import { Card } from "@repo/ui/card"

export const P2pRecentTranscations = ({
    recentTransactions
}: {
    recentTransactions: {
        timestamp: Date,
        amount: number,
    }[]
}) => {
    if (!recentTransactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {recentTransactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received USD
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.timestamp.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + USD {t.amount}
                </div>

            </div>)}
        </div>
    </Card>
}