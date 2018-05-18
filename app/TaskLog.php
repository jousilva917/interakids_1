<?php

namespace InteraKids;

use Illuminate\Database\Eloquent\Model;

class TaskLog extends Model
{
    private function user_quest_exists()
    {
        return self::where('aula_id', $this->aula_id)->where('user_id', $this->user_id)->limit(1)->first();
    }
}
