import { supabase } from './supabase.js';

export const taskApi = {
  // Get all tasks with optional filtering
  async getTasks(filters = {}) {
    let query = supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (filters.status) {
      query = query.eq('status', filters.status);
    }

    if (filters.priority) {
      query = query.eq('priority', filters.priority);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data;
  },

  // Get a single task by ID
  async getTask(id) {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  // Create a new task
  async createTask(task) {
    const taskData = {
      title: task.title,
      description: task.description || '',
      status: task.status || 'Pending',
      priority: task.priority || 'Medium',
      due_date: task.dueDate || null
    };

    const { data, error } = await supabase
      .from('tasks')
      .insert([taskData])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update a task
  async updateTask(id, task) {
    const updateData = {
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      due_date: task.dueDate || null
    };

    const { data, error } = await supabase
      .from('tasks')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete a task
  async deleteTask(id) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Get task statistics
  async getStats() {
    const { data: allTasks, error } = await supabase
      .from('tasks')
      .select('status');

    if (error) throw error;

    const stats = {
      total: allTasks.length,
      pending: allTasks.filter(t => t.status === 'Pending').length,
      inProgress: allTasks.filter(t => t.status === 'InProgress').length,
      completed: allTasks.filter(t => t.status === 'Completed').length
    };

    return stats;
  }
};
