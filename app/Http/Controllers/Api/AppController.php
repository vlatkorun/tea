<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AppController extends Controller
{
    public function reset() {

        DB::table('tweets')->delete();
        DB::table('hashtags')->delete();
        DB::table('entities')->delete();

        return response()->json(['message' => 'Database truncated']);
    }
}