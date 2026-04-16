export default function Card({ title, description, icon }) {
    return (
        <div className="card col-span-1 shadow-2xl shadow-blue-950 justify-center place-items-center bg-[#042b52] rounded rounded-2xl p-4 m-2 hover:-translate-y-2 hover:scale-105 duration-500 ">
            <div className="card-header p-4 justify-center text-white">
                {icon}
            </div>
            <div className="my-2 text-white text-2xl">{title}</div>
            <div className="card-body text-white text-lg text-center">
                <p>{description}</p>

            </div>
        </div>
    );
}