from rest_framework import serializers
from .models import Post

class PostsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ('title', 'content')

#     from rest_framework import serializers
# from .models import Post

# class PostsSerializer(serializers.Serializer):
#   title = serializers.CharField()
#   content = serializers.JSONField()
#   created_at = serializers.DateTimeField()
#   # author = serializers.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name="Автор")
#   slug = serializers.SlugField()
  
#   def create(self, validated_data):
#       print(777)
#       """
#       Create and return a new `Snippet` instance, given the validated data.
#       """
#       return Post.objects.create(**validated_data)

#   def update(self, instance, validated_data):
#       """
#       Update and return an existing `Snippet` instance, given the validated data.
#       """
#       instance.title = validated_data.get('title', instance.title)
#       instance.code = validated_data.get('code', instance.code)
#       instance.linenos = validated_data.get('linenos', instance.linenos)
#       instance.language = validated_data.get('language', instance.language)
#       instance.style = validated_data.get('style', instance.style)
#       instance.save()
#       return instance
  # class Meta:
  #   model = Post
  #   fields = ('title', 'content')

  #   def create(self, validated_data):
  #     print(2222)
  #     return Post.objects.create(**validated_data)