interface StandProps {
    name: string;
    hours: number;
    profileImage?: string;
    rank?: number;
}

export default function Stand({ name, hours, profileImage }: StandProps) {
return(
<div className="h-[16rem] w-[18rem] bg-amber-200 flex flex-col items-center justify-evenly rounded-lg relative">
<div className="text-center h-full bg-blue-400 w-full flex items-center justify-center">
    <img src={profileImage} alt={`${name}'s profile`} className="w-16 h-16 rounded-full mx-auto mt-4" />
</div>
<div className="text-center bg-amber-600 h-full w-full">
<p className="text-lg font-bold">{name}</p>
<p className="text-xl font-bold">{hours} hours</p>
</div>
</div>);}