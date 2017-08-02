<?php

use Illuminate\Database\Seeder;

class VideosTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('videos')->delete();
        
        \DB::table('videos')->insert(array (
            0 => 
            array (
                'id' => '1',
                'user_id' => '2',
                'title' => 'Leilão',
                'description' => 'Recente leilão do senhor bom jesus',
                'thumb' => '/photos//thumbs/15.jpg',
                'video' => '<p><video controls="controls" width="300" height="150">
<source src="/files/videos/leilao.mp4" type="video/mp4" /></video></p>',
                'created_at' => '2017-07-30 20:01:47',
                'updated_at' => '2017-07-30 20:01:47',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}