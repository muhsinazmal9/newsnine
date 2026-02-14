<?php

namespace App\Filament\Resources\Articles\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ArticleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                Textarea::make('content')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('excerpt')
                    ->columnSpanFull(),
                TextInput::make('author_id')
                    ->required()
                    ->numeric(),
                FileUpload::make('featured_image')
                    ->image(),
                TextInput::make('status')
                    ->required()
                    ->default('draft'),
                DateTimePicker::make('published_at'),
                TextInput::make('views')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('meta_title'),
                Textarea::make('meta_description')
                    ->columnSpanFull(),
                TextInput::make('meta_keywords'),
                TextInput::make('canonical_url')
                    ->url(),
            ]);
    }
}
