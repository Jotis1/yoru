import Background from "../ui/home/Background"
import Template from "./template"
import Nav from "../ui/Nav"
import LevelBar from "../ui/LevelBar";
import HomeNav from "../ui/home/HomeNav";
import LeftNavigation from "../ui/home/LeftNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col h-screen w-screen">
            <Nav />
            <LevelBar level={50} />
            <section className="flex items-center h-full flex-grow w-full">
                <HomeNav />
                <Template>
                    {children}
                </Template>
                <LeftNavigation />
            </section>
            <section className="w-screen h-screen overflow-hidden top-0 left-0 absolute -z-[1]">
                <Background />
            </section>
        </main>
    )
}