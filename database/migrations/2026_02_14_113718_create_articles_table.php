<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();

            $table->longText('content');
            $table->text('excerpt')->nullable();

            $table->foreignId('author_id')->constrained('users')->index();

            $table->string('featured_image')->nullable();

            $table->string('status')->default('draft')->index()->comment('draft, scheduled, published');

            $table->timestamp('published_at')->nullable()->index();

            $table->unsignedBigInteger('views')->default(0);

            // Basic SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->string('canonical_url')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->index(['author_id', 'status', 'published_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
