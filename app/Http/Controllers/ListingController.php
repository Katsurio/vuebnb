<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;

class ListingController extends Controller
{
    public function get_listing($listing)
    {
        $model = $listing->toArray();
        for ($i = 1; $i <= 4; $i++) {
            $model['image_' . $i] = asset(
                'images/' . $listing->id . '/Image_' . $i . '.jpg'
            );
        }
        return collect(['listing' => $model]);
    }

    public function get_listing_api(Listing $listing)
    {
        $data = $this->get_listing($listing);
        return response()->json($data);
    }

    public function get_listing_web(Listing $listing)
    {
        $data = $this->get_listing($listing);
        return view('app', ['data' => $data]);
    }

    public function get_home_web(Listing $listing)
    {
        return view('app', ['data' => []]);
    }
}
