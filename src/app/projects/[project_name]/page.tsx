'use client';
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation"

function Project({ params }: { params: { project_name: string } }) {
    const router = useRouter();

    return <>
        <div className="h-[calc(100vh-140.81px)] w-full flex justify-center items-center">
            <Button
                radius="full"
                variant="faded"
                onClick={() => router.push(`/projects/${params.project_name}`)}
                className=""
            >Snake Game</Button>
        </div>
    </>
}

export default Project;