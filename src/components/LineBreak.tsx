

export default function LineBreak({title}: {title: string}){
    return(
        <main className="pt-6">
            <div className="w-full border border-orange rounded-lg p-3">
                 <span className="font-extrabold">{title}</span>
            </div>
        </main>
    )
}