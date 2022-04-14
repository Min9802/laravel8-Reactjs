<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    private $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function users()
    {
        $users = $this->user->all();
        if($users){
            return response()->json($users, 200);

        }else{
            return response()->json([
                'error' => true,
                'msg' => 'Get Data Fail'
            ]);
        }

    }
}
