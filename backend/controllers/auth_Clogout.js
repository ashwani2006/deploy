const logout = (req, res) =>{
    try {
        // clear the cookies that are save in client_side
        res.clearCookie("token").status(200).json({msg:"you are logout successfully🖐️🖐️🖐️"})
    } catch (error) {
        res.status(500).json({msg:"error || error in logout page"})
    }
}

export default logout;