// @desc    Auth user/set token
// route    POST /api/users/auth
//@access   public
const authUser = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Auth User"
    })
}
export {authUser}