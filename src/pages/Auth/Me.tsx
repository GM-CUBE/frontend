import PageTemplate from "@assets/page/PageTemplate";
import { useSessionContext } from "hooks/useSessionContext";
import { faTrophy, faCoins, faFireFlameCurved, faUser, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAPI } from "hooks/useAPI";

const Me = () => {

    const Context = useSessionContext()
    const user = Context.user
    const token = Context.token

    const [level, setLevel] = useState("")

    const {
        get
    } = useAPI();

    const getData = async () => {
        const data = await get('levels', token)

        data['levels'].map((l:any) => {
            if (user){
                
                if (user.prestige >= l['minimumPrestige'] && user.prestige <= l['maximumPrestige']){
                    setLevel(l['name'])
                }
            }
        })
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <PageTemplate>
            <div className="flex flex-col justify-content items-center">
                {/* User Image */}
                <div className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-[#f6c90e] flex flex-col place-content-center">
                    <FontAwesomeIcon icon={faUser} color="white" fontSize={80}/>
                </div>
                {/* Username */}
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">{user?.username}</h1>
                
                {/* User prestige, coins and streak */}
                <div className="rounded-lg border-2 border-white flex flex-col items-center w-60 h-30 place-content-center">

                    <div className="flex flex-row items-center w-60 h-20 place-content-center">

                        <div className="inline-flex items-center gap-2 mx-10">
                            <FontAwesomeIcon icon={faTrophy} color="#f6c90e"/>
                            <h2 className="title-font sm:text-2xl text-1xl font-medium text-white">{user?.prestige}</h2>
                        </div>

                        <div className="inline-flex items-center gap-2 mx-10">
                            <FontAwesomeIcon icon={faCoins} color="#f6c90e"/>
                            <h2 className="title-font sm:text-2xl text-1xl font-medium text-white">{user?.coins}</h2>
                        </div>

                    </div>

                    <div className="inline-flex items-center gap-2 mx-10">
                        <FontAwesomeIcon icon={faFireFlameCurved} color="#f6c90e"/>
                        <h2 className="title-font sm:text-2xl text-1xl font-medium text-white">{user?.coins}</h2>
                    </div>

                    <span className="inline-block h-1 w-32 rounded bg-[#f6c90e] my-4" />

                    {/* Level */}
                    <div className="inline-flex items-center gap-2 mx-10 mb-2">
                        <FontAwesomeIcon icon={faRankingStar} color="#f6c90e"/>
                        <h2 className="title-font sm:text-2xl text-1xl font-medium text-white">{level}</h2>
                    </div>

                </div>

                {/* User information */}
                <fieldset className="rounded-md border-2 border-white w-1/3 h-60 my-10 flex flex-col items-center">
                    
                    <label className="title-font sm:text-2xl text-1xl font-medium text-[#f6c90e]">Information</label>
                    {/* First, Last name */}
                    <div className="flex flex-row py-6">

                        <div className="flex flex-row items-center gap-3 mx-6">
                            <label className="title-font sm:text-2xl text-1xl font-medium text-[#f6c90e]">First name:</label>
                            <label className="title-font sm:text-2xl text-1xl font-medium text-white">{user?.firstName}</label>
                        </div>

                        <div className="flex flex-row items-center gap-3 mx-6">
                            <label className="title-font sm:text-2xl text-1xl font-medium text-[#f6c90e]">Last name:</label>
                            <label className="title-font sm:text-2xl text-1xl font-medium text-white">{user?.lastName}</label>
                        </div>

                    </div>

                    {/* Age */}
                    <div className="flex flex-row py-10">

                        <div className="flex flex-row items-center gap-3 mx-6">
                            <label className="title-font sm:text-2xl text-1xl font-medium text-[#f6c90e]">Age:</label>
                            <label className="title-font sm:text-2xl text-1xl font-medium text-white">{user?.age}</label>
                        </div>

                    </div>

                </fieldset>

            </div>
        </PageTemplate>
    );

}

export default Me;